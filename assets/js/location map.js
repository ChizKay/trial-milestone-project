function initMap() {
    // Styles Map in night mode.
    var map = new google.maps.Map(document.getElementById("locationMap"), {
        center: {
            lat: 53.1424,
            lng: -7.6921
        },
        zoom: 4,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 52.6495, lng: -7.2513 },
        { lat: 52.6503, lng: -7.2523 },
        { lat: 52.6497, lng: -7.2517 },
        { lat: 52.6533, lng: -7.2481 },
        { lat: 52.6643, lng: -7.2505 },
        { lat: 53.2514, lng: -9.1524 },
        { lat: 53.2879, lng: -9.0467 },
        { lat: 53.3004, lng: -9.0985 },
        { lat: 53.2586, lng: -9.0850 },
        { lat: 53.2745, lng: -9.0467 },
        { lat: 51.8911, lng: -8.4903 },
        { lat: 51.8959, lng: -8.4848 },
        { lat: 51.8522, lng: -8.4867 },
        { lat: 51.9047, lng: -8.4520 },
        { lat: 51.8737, lng: -8.4203 },
        { lat: 54.6961, lng: -8.0532 },
        { lat: 54.6613, lng: -8.0796 },
        { lat: 54.6880, lng: -8.0669 },
        { lat: 54.6590, lng: -8.1180 },
        { lat: 54.6536, lng: -8.1107 },
        { lat: 53.3385, lng: -6.2529 },
        { lat: 53.3448, lng: -6.2329 },
        { lat: 53.3324, lng: -6.2575 },
        { lat: 53.3415, lng: -6.2614 },
        { lat: 53.3908, lng: -6.2738 }

    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            
        });
    
    });
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
