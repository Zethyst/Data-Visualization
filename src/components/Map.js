import React from "react";
import { GoogleMap, Marker } from '@react-google-maps/api';
import { mapOptions } from "./MapConfiguration";

function Map(props) {
  const {isLoaded} = props;

  const containerStyle = {
    padding:'20px',
    margin:'20px auto',
    width: '75vw',
    borderRadius:'14px',
    height: '400px',
    transform:'translate(150px)'
  };
  
  const markers = [
    {
        name:"location-1",
        location:{
            lat: 41.966737,
            lng: -101.111130
        }
    },
    {
        name:"location-2",
        location:{
            lat: 42.966737,
            lng: -107.111130
        }
    },
    {
        name:"location-3",
        location:{
            lat: 40.966737,
            lng: -115.111130
        }
    },
    {
        name:"location-4",
        location:{
            lat: 45.966737,
            lng: -121.111130
        }
    }
  ]

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markers[0].location}
        zoom={3}
        keyboardShortcuts={false}
        Options={{
            styles: mapOptions.mapTheme,
        }}
      >
        {markers.map((marker)=>{
            return(
                <div key={marker.name}>
                <Marker  position={marker.location} />
            </div>
            )
        })}
      </GoogleMap>
  ) : <></>
}

export default Map;
