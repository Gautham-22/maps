mapboxgl.accessToken = 'your_access_token';
navigator.geolocation.getCurrentPosition(successPosition,errorPosition,{enableHighAccuracy: true});

function successPosition(position) {
    showMap([position.coords.longitude,position.coords.latitude]);
}

function errorPosition(err) {
    showMap([-2.24,53.48]);
}

function showMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center : center,
        zoom : 16
    });

    // for navigation and zoom control
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    // for direction control
    var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken 
    });
    map.addControl(directions, 'top-left');
}