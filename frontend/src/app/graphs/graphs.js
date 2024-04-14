

class BarGraphObserver{
    constructor(){
       self.graph= null 
    }

    display(type){
        if (type!="Bar"){

        }
        else{
        
        const BarGraph = new Chart("BarGraph", {
            type: "bar",
            data: {
                labels: categories.map(row => row.category),
                datasets: [{
                    label: "Categories",
                    data: categories.map(row => row.amount),
                }]
            },
            options: {}
        });
        return BarGraph
    }
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
    //retrieve transactions from backend

}
const TransactionList = getMonthsTransactions();
