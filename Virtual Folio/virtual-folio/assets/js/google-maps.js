function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -30.4766, lng: 76.5905};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Chitkara University, Rajpura' // Title Location
    });
}