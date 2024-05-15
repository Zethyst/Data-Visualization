import React from 'react'
import Chart from 'react-apexcharts'

function Pie_Chart() {
  return (
    <>  
        <div className='w-96 mx-auto'>
            <Chart type='pie' height={450} width={449} series={[99,2]} options={{
                labels:["ON TIME (681)","LATE (1)"],
                colors:['#7BB896', '#F7A668'],
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
                  offsetY: 70,
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