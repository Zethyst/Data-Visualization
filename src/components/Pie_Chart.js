import React from 'react'
import Chart from 'react-apexcharts'

function Pie_Chart() {
  return (
    <>  
        <div className='w-96 mx-auto'>
            <Chart type='pie' height={450} width={449} series={[90,13,10,7,29]} options={{
                labels:["BOOKED (19)","DISCHARGED (29)", "ARRIVED (22)", "DELIVERED (393)","RETURNED (149)"],
                colors:['#6B120A', '#EB5D50', '#F7A668','#7BB896','#1073E6','#856562'],
                dataLabels: {
                  enabled: false,
                },
                legend: {
                  show: true,
                  position: 'right',
                  horizontalAlign: 'center', 
                  fontSize: '10px',
                  fontFamily: 'Helvetica, Arial',
                  fontWeight: 400,
                  offsetX: 0,
                  offsetY: 30,
                  itemMargin: {
                      horizontal: 25,
                      vertical: 0
                  },
                },
            }}/>
        </div>
    </>
  )
}

export default Pie_Chart