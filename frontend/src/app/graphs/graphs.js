import Chart from 'chart.js/auto'

const COLORS = ['rgb(255, 99, 132)', 'rgb(201, 203, 207)', 'rgb(153, 102, 255)', 'rgb(255, 205, 86)']
class BarGraphObserver{
    constructor(){
        const BarGraph = new Chart("BarGraph", {
            type: "bar",
            data: {
                labels: "None",
                datasets: []
            },
            options: {}
        });
    this.graph=BarGraph
    }

    display(type){
        if (type!="Bar"){

        }
        else{
            let val = getMonthsTransactions()
            let categories = val[0]
            let spending = val[1]
            let limit = val[2]

            console.log(categories)
            const graph = new BarGraphObserver();
            for (let i = 0; i < categories.length; i++){
                graph.addData(graph, categories, spending, limit)
                for (let j = 0; j < categories.length; j++){
                    categories[j]=categories[j+1]
                    spending[j]=spending[j+1]
                    limit[j]=limit[j+1]
                }
            }
            return graph
    }

}
    //chart represents the graph and categories passed in from the database
    addData(chart, categories, spending, limit){
        const data = chart.data
        const datasetColor = COLORS[chart.data.datasets.length];
        const newDataset = {
            label: categories[0],
            borderColor: datasetColor,
            borderWidth: 1,
            data: spending[0],//where values will go
        };
        chart.data.datasets.push(newDataset)
        chart.update();

    }
}

class PieGraphObserver{
    constructor(){
        const PieGraph = new Chart("PieGraph", {
            type: "pie",
            data: {
                labels: "None",
                datasets: []
            },
            options: {}
        })
        this.graph = PieGraph
    }
    display(type){
        if (type!="Pie"){

        }
        else{
        const graph = new PieGraphObserver()
        return graph
    }
}
}

class LineGraphObserver{
    constructor(){
        const LineChart = new Chart("LineChart",{
            type: "line",
            data: {
                labels: "None" ,
                datasets: []
        
            },
            options: {}
        });
        this.graph = LineChart
    }
    display(type){
        if (type!="Line"){

        }
        else{
            const graph = new LineGraphObserver()
        return graph
        }
}
}

function getMonthsTransactions(){
    let categories = []
    let spending = []
    let limits = []
//retrieve transactions from backend
    categories = ['Gas', 'Food', 'Rent', 'Fun']
    spending = [300, 200, 1000, 54]
    limits = [500, 300, 1500, 100]
    return [categories, spending, limits]
}

export {BarGraphObserver, PieGraphObserver, LineGraphObserver}
