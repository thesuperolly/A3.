// UC Canberra Map Bounds
const bounds = [
    [149.067, -35.2431], // Southwest coordinates
    [149.100, -35.2313] // Northeast coordinates
    ];


mapboxgl.accessToken = 'pk.eyJ1IjoidGhlc3VwZXJvbGx5IiwiYSI6ImNrdW56YWJpbzJhbmsyb29mc2dhanozdmkifQ.S9iz7Kp6v8gbm4IOUT2T2g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/thesuperolly/ckunzfr09979617lomc0741h6',
    center: [149.093, -35.2375],
    zoom: 13,
    maxZoom: 16,
    minZoom: 13,
    zoom: 12, // starting zoom
    maxBounds: bounds // Set the map's geographical boundaries.
});

// disable map zoom when using scroll
// map.scrollZoom.disable();

// mapbox://styles/thesuperolly/ckuz9bleh0lmz14o7ayeoeql6

// mapbox://styles/thesuperolly/ckunzfr09979617lomc0741h6