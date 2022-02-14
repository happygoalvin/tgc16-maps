async function earthquakeMarker() {
    let response = await axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson");
    console.log(response)
    return response.data.features;
}

window.addEventListener("DOMContentLoaded", async function() {
    let earthquakeArray = await earthquakeMarker();
    let markerClusterLayer = L.markerClusterGroup();
    for (let e of earthquakeArray) {
        let earthquakeList = e.geometry.coordinates
        let lat = earthquakeList[0];
        let lng = earthquakeList[1];
        console.log(lat, lng)
        let marker = L.marker([lat,lng]);
        marker.addTo(markerClusterLayer);
    }
    markerClusterLayer.addTo(map);
}) 


let singapore = [1.29,103.85]; // #1 Singapore latlng
let map = L.map('map').setView(singapore, 13); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);





