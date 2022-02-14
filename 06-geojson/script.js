async function cyclingPath() {
    let response = await axios.get('06-geojson/cycling.geojson')
    let cyclingLayer =  L.geoJson(response.data, {
        onEachFeature:function(feature, layer) {
            layer.bindPopup(feature.properties.Description);
            let dummyDiv = document.createElement('div');
            dummyDiv.innerHTML = feature.properties.Description;
            let columns = dummyDiv.querySelectorAll('td');
            let pathName = columns[0].innerHTML;
            let agency = columns[1].innerHTML;
        }
    }).addTo(map);
    cyclingLayer.setStyle({
        'color':'red'
    })
    return cyclingLayer; 
}

async function loadnParks() {
    let response = await.axios.get('nparks.geojson')
    let nparks = L.geoJson (response.data, {
        onEachFeature:function(feature, layer) {
            
        }
    })
}