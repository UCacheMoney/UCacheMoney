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
        for(let i = 0; i != (this.observers).length; i++){
            (this.observers[i]).display(data)
        }
    }
}
const Observer = new Observable()
const BarObserver = new BarGraphObserver()
const LineObserver = new LineGraphObserver()
const PieObserver = new PieGraphObserver()
Observer.addObj(BarObserver)
Observer.addObj(LineObserver)//adds each subclass to the observable list
Observer.addObj(PieObserver)

export default function GraphPage(){
    function pieClicked(){
        Observer.notify("Pie")
    }

    function lineClicked(){
        Observer.notify("Line")
    }

    function barClicked(){
        Observer.notify("Bar")
    }

    return (
    <div className="Graph Page">
        <a>You are on the graph page</a>
        <main>
            <section className="body">
                <div style ={{width: "600px"}}><canvas id="graphs"></canvas></div>
                <script type="module" src="graphs.js"></script>
                <button onClick={pieClicked()}>Scatter Plot</button>
                <button onClick={lineClicked()}>Line Graph</button>
                <button onClick={barClicked()}>Bar Graph</button>
            </section>
        </main>
    </div>
    );
}