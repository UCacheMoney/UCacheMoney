//"use client"
import {BarGraphObserver, PieGraphObserver, LineGraphObserver} from './graphs'
import BarGraph from './attempt2'
// import dynamic from 'next/dynamic';
// import { Chart} from "chart.js";
// const DynamicBarGraph = dynamic(() => import('./attempt2'),{
// ssr: false
// })

// class Observable{ //creating Observable class to alert observers
//     constructor() {
//         this.observers = [];
//     }

//     addObj(obj) {
//         this.observers.push(obj);
//     }

//     delObj(obj) {
//         this.observers = this.observers.filter((observer) => observer !== obj);
//     }

//     notify(data){
//         for(let i = 0; i != (this.observers).length; i++){
//             (this.observers[i]).display(data)
//         }
//     }
// }
// const Observer = new Observable()
// /*const BarObserver = new BarGraphObserver()
// const LineObserver = new LineGraphObserver()
// const PieObserver = new PieGraphObserver()
// Observer.addObj(BarObserver)
// Observer.addObj(LineObserver)//adds each subclass to the observable list
// Observer.addObj(PieObserver)*/

export default function GraphPage(){
//     function pieClicked(){
//         Observer.notify("Pie")
//     }

//     function lineClicked(){
//         Observer.notify("Line")
//     }

//     function barClicked(){
//         bar
//     }

//     const COLORS = ['rgb(255, 99, 132)', 'rgb(201, 203, 207)', 'rgb(153, 102, 255)', 'rgb(255, 205, 86)']
//     const categories = ['Gas', 'Food', 'Rent', 'Fun']
//     const spending = [300, 200, 1000, 54]
//     const limits = [500, 300, 1500, 100]
    
//     let BarGraph = new Chart(document.getElementById('graphsCanvas'), {
//         type: "bar",
//         data: {
//             labels: categories,
//             datasets: []
//         },
//         options: {}
//     });
    
//     for (let i = 0; i <= categories.length; i++){
//         let newDataset= {
//             label: categories[i],
//             borderColor: COLORS[i],
//             data: spending[i]
//         }
//         BarGraph.data.datasets.push(newDataset)
//         BarGraph.update()
//     }

    return (
//create index file and import as document to be refrenced
            <div className="Graph Page">
                    <a>You are on the graph page</a>
                    <main>
                        <body>
                        <section className="body">
                            <BarGraph/>
                        </section>
                        </body>
                    </main>
                </div>
    );
}