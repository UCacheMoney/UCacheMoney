

class BarGraphObserver{
    constructor(){

    }


    display(){
        
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
    }

}

class PieGraphObserver{

}

class LineGraphObserver{
    
    display(){
    const LineChart = new Chart("LineChart",{
        type: "line",
        data: {
            labels: label ,
    
        },
        options: {}
    });
}
}

function getMonthsTransactions(){
    const moment = require('moment');
    //retrieve transactions from backend

}
const TransactionList = getMonthsTransactions();


let colors =['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'black', 'pink'];
let dates = []
let categories = {category: "name", amount: 500}


