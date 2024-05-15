import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'display:false',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#6B120A',
          '#EB5D50',
          '#F7A668',
          '#7BB896',
          '#1073E6',
          '#856562',
        ],
        borderColor: [
          '#6B120A',
          '#EB5D50',
          '#F7A668',
          '#7BB896',
          '#1073E6',
          '#856562',
        ],
        borderWidth: 1,
        options: {
          maintainAspectRatio: false,
          plugins: {
              legend: false // Hide legend
          },
          scales: {
              y: {
                  display: false // Hide Y axis labels
              },
              x: {
                  display: false // Hide X axis labels
              }
          }  
      }
      },
    ],
  };

function Pie_Chart() {
  return (
    <div className='h-96 w-auto flex'>
         <Pie data={data} className='mx-auto'/>
        <Doughnut data={data} className='mx-auto' />
    </div>
  )
}

export default Pie_Chart