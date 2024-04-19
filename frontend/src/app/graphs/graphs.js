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
            const graph = new BarGraph();
            for (i = 0; i < categories.length; i++){
                categories, spending, limit = getMonthsTransactions()
                addData(graph, labels)
            }
            return graph
    }

}
    //chart represents the graph and categories passed in from the database
    addData(chart){
        const data = chart.data
        const datasetColor = Utils.namedColor(chart.data.datasets.length);
        const newDataset = {
            label: labels[data.datasets.length],
            backgroundColor: Utils.transparentize(datasetColor, 0.5),
            borderColor: datasetColor,
            borderWidth: 1,
            data: Utils.numbers({count: data.labels.length, min: 0, max: 5000}),//where values will go
        };
        chart.data.datasets.push(newDataset)
        chart.update();
    }
}

class PieGraphObserver{
    constructor(){
        self.graph = null
    }
    display(type){
        if (type!="Pie"){

        }
        else{
            const PieGraph = new Chart("PieGraph", {
                type: "pie",
                data: {
                    labels: label, 
                },
                options: {}
            })
        return PieGraph
    }
}
}

class LineGraphObserver{
    constructor(){
        self.graph = null
    }
    display(type){
        if (type!="Line"){

        }
        else{
            const LineChart = new Chart("LineChart",{
                type: "line",
                data: {
                    labels: label ,
            
                },
                options: {}
            });
        }
        return LineChart
}
}

function getMonthsTransactions(){
    const moment = require('moment');
    let categories = []
    let spending = []
    let limits = []
//retrieve transactions from backend
    return categories, spending, limits
}
