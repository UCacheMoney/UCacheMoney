
function getMonthsTransactions(){
    const moment = require('moment');
    //retrieve transactions from backend

}
const TransactionList = getMonthsTransactions();



let colors =['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'black', 'pink'];
let dates = []
let categories

const ScatterPlot = new Chart("ScatterPlot", {
    type: "scatter",
    data: {
    labels: dates,
    datasets: [{

    }]
    }
});


const LineChart = new Chart("LineChart",{
    type: "line",
    data: {},
    options: {}
});


const BarGraph = new Chart("BarGraph", {
    type: "bar",
    data: {
        labels: categories,
        datasets: [{
            backgroundColor: colors,
            data: 
        }]
    },
    options: {}
});

