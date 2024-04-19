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
        <a>You are on the graph page</a>
        <main>
            <section className="body">
                <div style = "width: 600px;"><canvas id="graphs"></canvas></div>
                <script type="module" src="graphs.js"></script>
                <Button onClick={pieClicked}>Scatter Plot</Button>
                <Button onClick={lineClicked}>Line Graph</Button>
                <Button onClick={barClicked}>Bar Graph</Button>
            </section>
        </main>
    </div>
    );
}