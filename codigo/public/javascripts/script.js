document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

mapboxgl.accessToken =
  'pk.eyJ1IjoiYW1lenVyaXRhIiwiYSI6ImNrNjhxOWZiMDA3cWIzZG41djNpcDRzYzgifQ.prdZjgmPm0kgu4wKxcrETg'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
})

const geoCoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  countries: 'mx'
})

map.addControl(geoCoder)

map.on('moveend', r => {
  const { lng, lat } = map.getCenter()
  if (lng !== 0 || lat !== 0) {
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)
    const address = document.querySelector('input[placeholder="Search"]').value
    const addressInput = document.querySelector('input[name="address"]')
    const latInput = document.querySelector('input[name="latitude"]')
    const lngInput = document.querySelector('input[name="longitude"]')
    latInput.value = lat
    lngInput.value = lng
    addressInput.value = address
  }
})
