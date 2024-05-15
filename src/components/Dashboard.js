import React from 'react'
import Booking_Stats from './Booking_Stats'
import Map from './Map'
import PieChartAnalysis from './Pie_Chart_Analysis'
import LatestDocs from './LatestDocs'
import Annoucements from './Annoucements'
import { mapOptions } from './MapConfiguration';
import {  useJsApiLoader } from '@react-google-maps/api';
function Dashboard() {

    const { isLoaded } = useJsApiLoader({
        id: mapOptions.googleMapApiKey,
        googleMapsApiKey: mapOptions.googleMapApiKey
      })
  return (
    <>
          <Booking_Stats/>
      <Map isLoaded={isLoaded}/>
      <PieChartAnalysis/>
      <div className='mt-[500px] absolute right-0 w-[78%] mx-2 flex'>
        <LatestDocs/>
        <Annoucements/>
      </div>
    </>
  )
}

export default Dashboard