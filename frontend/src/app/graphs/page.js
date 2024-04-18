import {BarGraphObserver, PieGraphObserver, LineGraphObserver} from './graphs'

class Observable{ //creating Observable class to alert observers
    constructor() {
        this.observers = [];
    }

    addObj(obj) {
        this.observers.push(obj);
    }

    delObj(obj) {
        this.observers = this.observers.filter((observer) => observer !== obj);
    }

    notify(data){
        for(i = 0; i != (this.observers).length; i++){
            (this.observers[i]).display(data)
        }
    }

    getData(){

    }

    addDataset(){
        
    }
}

Observable.addObj(BarGraphObserver)
Observable.addObj(PieGraphObserver)//adds each subclass to the observable list
Observable.addObj(LineGraphObserver)

export default function GraphPage(){
    function pieClicked(){
        Observable.notify("Pie")
    }

    function lineClicked(){
        Observable.notify("Line")
    }

    function barClicked(){
        Observable.notify("Bar")
    }

    return (
    <div className="Graph Page">
        <a>You are on the class page</a>
        <Button onClick={pieClicked}>Scatter Plot</Button>
        <Button onClick={lineClicked}>Line Graph</Button>
        <Button onClick={barClicked}>Bar Graph</Button>
    </div>
    );
}