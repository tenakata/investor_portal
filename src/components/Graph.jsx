import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as Chartjs, 
    PointElement, 
    LineElement, 
    CategoryScale, 
    Legend, 
    Title, 
    Tooltip,
    LinearScale
 } from 'chart.js';

 Chartjs.register(
    PointElement, 
    LineElement, 
    CategoryScale, 
    Legend, 
    Title, 
    Tooltip,
    LinearScale
 )

const Graph = () => {

    const options = {
        height:150,
    }

    const data = {
        labels:[
            "",
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ],
        datasets:[
            {
                data:[800,800,600,600,400,300,800],
                borderColor:"#707070"
            }
        ]
    }

  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default Graph