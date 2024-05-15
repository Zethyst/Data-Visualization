import React from 'react'
import Chart from 'react-apexcharts'

function Donut_Chart() {
  return (
    <>
        <div className='mx-auto'>
            <Chart type='donut' height={350} width={200} series={[83,13,10,10,7,20]} options={{
                labels:["Hindi","Math", "English", "Science"],
                colors:['#6B120A', '#EB5D50', '#F7A668','#7BB896','#1073E6','#856562'],
                dataLabels: {
                  enabled: false,
                },
                legend: {
                  show: false,
                  position: 'left',
                  horizontalAlign: 'center', 
                  fontSize: '18px',
                  fontFamily: 'Helvetica, Arial',
                  fontWeight: 400,
                  offsetX: 0,
                  offsetY: 100,
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

export default Donut_Chart
