"use client"
import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";
const COLORS = ['rgb(255, 99, 132)', 'rgb(201, 203, 207)', 'rgb(153, 102, 255)', 'rgb(255, 205, 86)']
const categories = ['Gas', 'Food', 'Rent', 'Fun']
const spending = [300, 200, 1000, 54]
const limits = [500, 300, 1500, 100]
export default function BarGraph (){

const chartRef = useRef(null)
useEffect(() => {
    if (chartRef.current){
        if(chartRef.current.chart){
            chartRef.current.chart.destroy()
        }
    }
    const ctx = chartRef.current.getContext('2d')
    
    let BarGraph = new Chart(ctx, {
        type: "bar",
        data: {
            labels: "categories",
            datasets: [{
                label: categories,

                data: spending,

                backgroundColor: COLORS,

            }]
        },
        options: {
        }
    });
    
    // for (let i = 0; i <= categories.length; i++){
    //     let newDataset= {
    //         label: categories[i],
    //         borderColor: COLORS[i],
    //         data: spending[i]
    //     }
    //     BarGraph.data.datasets.push(newDataset)
    //     BarGraph.update()
    // }

    chartRef.current.chart = BarGraph
}, [])


return (<div style={{position: "relative", width: '90vw', height: "90vw"}}>
    <canvas ref={chartRef}/>
</div>)
}