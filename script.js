// UC Canberra Map Bounds
const bounds = [
    [149.076, -35.24388], // Southwest coordinates
    [149.0935, -35.23173] // Northeast coordinates
    ];


// Mao Token
mapboxgl.accessToken = 'pk.eyJ1IjoidGhlc3VwZXJvbGx5IiwiYSI6ImNrdW56YWJpbzJhbmsyb29mc2dhanozdmkifQ.S9iz7Kp6v8gbm4IOUT2T2g';

// Map Start
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/thesuperolly/ckunzfr09979617lomc0741h6', //this is where you specivy which mapBox map you want to use.
    center: [149.093, -35.2375],
    maxZoom: 16,
    minZoom: 13,
    zoom: 13, // starting zoom
    maxBounds: bounds // Set the map's geographical boundaries.
});





// add markers to map
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
     
    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    )
    .addTo(map);
    }

// show current coordinates
    map.on('mousemove', (e) => {
        document.getElementById('info').innerHTML =
        // `e.point` is the x, y coordinates of the `mousemove` event
        // relative to the top-left corner of the map.
        '<h3>Canvas Coordinates '+ JSON.stringify(e.point) + '</h3>' +
        '<br />' +
        // `e.lngLat` is the longitude, latitude geographical position of the event.
        '<h3>Global Coordinates ' + JSON.stringify(e.lngLat.wrap()); + '</h3>'
        });

    

// disable map zoom when using scroll
// map.scrollZoom.disable();


// Demo Test Map
// mapbox://styles/thesuperolly/ckunzfr09979617lomc0741h6