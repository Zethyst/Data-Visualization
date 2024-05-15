const GOOGLE_MAPS_API_KEY=process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MAP_THEME = [
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#C6E2FF"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#C5E3BF"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#D1D1B8"
            }
        ]
    }
]
export const mapOptions = {
    googleMapApiKey: GOOGLE_MAPS_API_KEY,
    mapTheme:MAP_THEME
};