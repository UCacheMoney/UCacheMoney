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
        this.observers.forEach((observer) => observer(data))
    }
}
Observable.addObj(BarGraphObserver)
Observable.addObj(PieGraphObserver)
Observable.addObj(LineGraphObserver)

export default function GraphPage(){
    function scatterClicked(){
        Observable.notify("scatterPlot")
    }

    function lineClicked(){
        Observable.notify("LineGraph")
    }

    function barClicked(){
        Observable.notify("BarGraph")
    }

    return (
    <div className="Graph Page">
        <a>You are on the class page</a>
        <Button onClick={scatterClicked}>Scatter Plot</Button>
        <Button onClick={lineClicked}>Line Graph</Button>
        <Button onClick={barClicked}>Bar Graph</Button>
    </div>
    );
}